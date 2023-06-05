from rest_framework import serializers
from .models import *
from rest_framework.permissions import IsAuthenticated


#O serializaer serve para converter o obj do banco para json e obj json para obj do banco
class CadastroclienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Cliente
        #tudo que tá aqui dentro do fields é pra ser convertido e enviado para o banco de dados
        fields=['user_id', 'nome', 'cpf', 'email', 'data_nascimento', 'celular', 'password', 'data_e_hora', 'tentativas']

class EnderecoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Endereco
        fields = ['id', 'logradouro', 'bairro', 'cidade', 'uf', 'cep', 'fk_cliente']

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ['id','agencia', 'numero', 'tipo', 'limite', 'ativa']

class CartaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartao
        fields = ['id', 'fk_conta', 'numero_cartao', 'cvv', 'data_vencimento', 'bandeira', 'cartao_ativo', 'nome_titular']

class MovimentacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimentacao
        fields = ['cliente','destinatario', 'valor', 'operacao','fk_movimentacao']

class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = ['id', 'dataSolicitacao', 'valorSolicitado', 'juros', 'aprovado', 'valorTotalJuros', 'valorParcelaJuros', 'fk_conta_emprestimo']
        
class ExtrattoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'fk_extrato', 'data', 'valor', 'nome_destinatario']

