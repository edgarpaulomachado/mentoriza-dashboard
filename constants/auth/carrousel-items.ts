interface LoginCarrouselItem {
  id: number;
  title: string;
  description: string;
  cover: string;
}

export const loginCarrouselItems: LoginCarrouselItem[] = [
  {
    id: 0,
    title: 'Gerencie estudantes em um só lugar',
    description:
      'Cadastre estudantes, organize turmas e acompanhe o progresso acadêmico de cada aluno de forma centralizada e eficiente',
    cover: '/login/carrousel/01.jpg',
  },
  {
    id: 1,
    title: 'Controle e aprove relatórios com facilidade',
    description:
      'Receba relatórios, analise conteúdos, deixe feedbacks e aprove ou rejeite com poucos cliques, tudo em tempo real.',
    cover: '/login/carrousel/02.jpg',
  },
  {
    id: 2,
    title: 'Administre mentores com eficiência',
    description:
      'Gerencie mentores, distribua responsabilidades e garanta um acompanhamento organizado entre estudantes e orientadores.',
    cover: '/login/carrousel/03.jpg',
  },
];
