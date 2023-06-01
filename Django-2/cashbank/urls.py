from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.SimpleRouter()
router.register('usuario', views.ListarClientes)
router.register('endereco', views.EnderecoView)
router.register('conta', views.ContaCreateView)
router.register('emprestimo', views.EmprestimoView)
router.register('movimentacao', views.MovimentacaoView)


urlpatterns = router.urls



