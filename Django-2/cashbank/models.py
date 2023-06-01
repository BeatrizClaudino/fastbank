from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from random import randint
from django.core.validators import MinValueValidator,MaxValueValidator

class CustomUserManager(BaseUserManager):
    def create_user(self, cpf, password, **extra_fields):
        num = ''
        lista=[]
        
        if not cpf:
            raise ValueError(("The Email must be set"))
        # cpf = self.normalize_email(cpf)
        user = self.model(cpf=cpf, **extra_fields)
        
        for i in range(0, 5):
            num = (randint(0,9))
            lista.append(num) 
        numero = ("".join(map(str, lista)))
        
        user.set_password(password)
        user.save()
        Conta.objects.create(fk_cliente=user,agencia='200',numero=numero, tipo='Corrente', limite=10, ativa=True)
        return user
       
    
    def create_superuser(self, cpf, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(("Superuser must have is_superuser=True."))
        return self.create_user(cpf, password, **extra_fields)

class Cliente(AbstractUser):
    username = None
    nome = models.CharField(max_length=255)
    celular = models.CharField(max_length=20, default='')
    cpf = models.CharField(max_length=11, unique=True)
    email = models.EmailField(null=False, unique=True)
    data_nascimento = models.DateField()
    
    #é para as tentativas de login do usuario
    tentativas = models.IntegerField(default=0)   
    data_e_hora = models.CharField(max_length=20, default=0)
    # imagem = models.ImageField(upload_to="foto_users")
    
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    USERNAME_FIELD = 'cpf'
    REQUIRED_FIELDS = ['nome', 'celular', 'email', 'data_nascimento', 'tentativas', 'data_e_hora', 'password']
    
    objects = CustomUserManager()

class Conta(models.Model):
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    agencia = models.CharField(max_length=10)
    numero = models.CharField(max_length=25)
    tipo = models.CharField(max_length=20)
    limite = models.DecimalField(decimal_places=2, max_digits=8)
    ativa = models.BooleanField(default=True)   
    # data_criacao = models.DateTimeField(auto_now_add=True)
    
class Endereco(models.Model):
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    logradouro = models.CharField(max_length=100)
    bairro = models.CharField(max_length=75)
    cidade = models.CharField(max_length=75)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.cep
    
    class Meta:
        verbose_name_plural = "Endereço"

class Cartao(models.Model):
    fk_conta_cartao = models.ForeignKey(Conta, on_delete=models.DO_NOTHING)
    numero_cartao = models.CharField(max_length=20)
    cvv = models.IntegerField()
    data_vencimento = models.DateField()
    bandeira = models.CharField(max_length=20)
    nome_titular_cartao = models.CharField(max_length=100)
    cartao_ativo = models.BooleanField(default=True)
    nome_titular = models.CharField(max_length=255)
    numero_conta = models.CharField(max_length=5)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["numero_cartao"],
                name="unique_numero_cartao",
            )
        ]
        verbose_name_plural = "Cartao"
        
class Movimentacao(models.Model):
    TRANSFERENCIA_PIX = 'PI'
    TRANSFERENCIA_DOC = 'DC' #TRANSFERENCIA DE CONTAS DO MESMO BANCO 
    TRANSFERENCIA_NOME = 'NOM'
    
    TRANSFERENCIA_CHOICES = (
        (TRANSFERENCIA_PIX,'PIX'),
        (TRANSFERENCIA_DOC,'DOC'),
        (TRANSFERENCIA_NOME, 'NOME')
    )
    fk_movimentacao = models.ForeignKey(Conta, on_delete=models.CASCADE, related_name='transferencias_enviadas')
    destinatario = models.CharField(max_length=100)
    cliente = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=8, decimal_places=2)
    operacao = models.CharField(max_length=3, choices=TRANSFERENCIA_CHOICES, default=TRANSFERENCIA_PIX)
 
class Emprestimo(models.Model):
    fk_conta_emprestimo = models.ForeignKey(Conta, on_delete=models.CASCADE)
    dataSolicitacao = models.DateField(auto_now=True)
    valorSolicitado = models.DecimalField(validators=[MinValueValidator(1,message='O preço deve ser maior que 1 real'),MaxValueValidator(20000)], max_digits=10, decimal_places=2)
    juros = models.FloatField()
    valorTotalJuros = models.FloatField()
    valorParcelaJuros = models.FloatField()
    aprovado = models.BooleanField(default=False)
    
class Extrato(models.Model):
    fk_extrato = models.ForeignKey(Conta, on_delete=models.CASCADE)
    data = models.DateField(auto_now=True)
    valor = models.DecimalField(max_digits=8, decimal_places=8)
    nome_destinatario = models.CharField(max_length=100)
    

    
    