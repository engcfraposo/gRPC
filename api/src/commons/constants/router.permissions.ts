import permissions from './permissions.constants';

export default [
  {
    id: permissions.DEL_REG_ATEN,
    name: 'Deletar Registro de Atendimento',
    routes: [
      {
        path: 'registroatendimento/:id',
        method: 'DELETE',
      },
    ],
  },
];
