interface Testimonial {
  id: number;
  rating: number; // 1-5
  comment: string;
  user: {
    name: string;
    role: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    comment: "O Cozinha & Sabor revolucionou minha cozinha! As receitas são fáceis de seguir e os resultados impressionantes.",
    user: {
      name: "Maria Fernanda",
      role: "Chef amadora",
    }
  },
  {
    id: 2,
    rating: 5,
    comment: "Nunca imaginei que poderia cozinhar pratos tão sofisticados em casa. As instruções passo a passo são perfeitas!",
    user: {
      name: "Carlos Roberto",
      role: "Pai de família",
    }
  },
  {
    id: 3,
    rating: 5,
    comment: "Minhas habilidades culinárias melhoraram 200% desde que comecei a usar o Cozinha & Sabor. Recomendo para todos!",
    user: {
      name: "Ana Souza",
      role: "Food blogger",
    }
  },
  {
    id: 4,
    rating: 4,
    comment: "Adoro a variedade de receitas internacionais. Me ajudou a expandir meu paladar e habilidades na cozinha!",
    user: {
      name: "João Pedro",
      role: "Estudante universitário",
    }
  },
  {
    id: 5,
    rating: 5,
    comment: "Como nutricionista, recomendo o Cozinha & Sabor para meus pacientes. Receitas saudáveis e saborosas!",
    user: {
      name: "Dra. Juliana Martins",
      role: "Nutricionista",
    }
  }
];