import { Fragment } from 'react'

export const CardList = {
  itemA: {
    description:
      'Com mais de 150 anos de história, o Mackenzie é uma instituição educacional pioneira, agente de inovações pedagógicas. Comprometido com valores e princípios cristãos, o Instituto busca formar cidadãos capazes de discernir, realizar uma leitura do mundo e intervir na sociedade.',
    img: 'imgALarge.png',
    alt: 'Com mais de 150 anos de história',
  },
  itemB: {
    description:
      'O Sistema Mackenzie de Ensino é líder na oferta de uma proposta educacional sustentada pela tradição cristã. Com materiais didáticos e soluções pedagógicas, atendemos mais de 400 escolas, incluindo unidades próprias e parceiras. Destacamo-nos como o primeiro sistema de ensino cristão e o mais relevante academicamente no país.',
    img: 'imgCLarge.png',
    alt: 'Ensino líder de proposta educacional',
  },
  itemC: {
    description:
      'O Sistema Mackenzie de Ensino trabalha para fornecer uma pedagogia cristã, com materiais e recursos didáticos, que conduza essa geração a glorificar a Deus por meio de uma atuação biblicamente orientada, social e culturalmente relevantes.',
    img: 'imgBLarge.png',
    alt: 'Trabalha para fornecer uma pedagogia cristã',
  },
  itemD: {
    title: (
      <Fragment>
        Histórico do <strong className="text-red-m">SME</strong>
      </Fragment>
    ),
    description:
      'Desenvolvemos um modelo pedagógico alinhado com a filosofia cristã e o entendimento de que todo conhecimento provém de Deus e é o ponto convergente de todo raciocínio.',
    img: 'imgDLarge.png',
    alt: 'Modelo pedagógico alinhado com a filosofia cristã',
  },
}

export const CardListResponsive = [
  {
    title: (
      <Fragment>
        Mais de <strong className="text-red-m">150 anos</strong> de história
      </Fragment>
    ),
    description:
      'Com mais de 150 anos de história, o Mackenzie é uma instituição educacional pioneira, agente de inovações pedagógicas. Comprometido com valores e princípios eternos, o Instituto busca formar cidadãos capazes de discernir, realizar uma leitura do mundo e intervir na sociedade.',
    img: 'imgASmall.png',
    alt: 'Com mais de 150 anos de história',
    hasButton: true,
  },
  {
    description:
      'Nós, os Sistemas de Ensino Mackenzie, somos líderes na oferta de uma proposta educacional sustentada pela tradição. Com materiais didáticos e soluções didático-pedagógicas, atendemos mais de 400 escolas, incluindo unidades próprias e parceiras. Destacamo-nos como o sistema de ensino cristão mais relevante academicamente no país, baseado em uma cosmovisão bíblica.',
    img: 'imgBSmall.png',
    alt: 'Ensino líder de proposta educacional',
  },
  {
    description:
      'Nós, os Sistemas de Ensino Mackenzie, oferecemos uma proposta educacional abrangente, com materiais didáticos e soluções pedagógicas, atendendo a mais de 400 escolas. Somos reconhecidos como o sistema de ensino cristão de maior relevância acadêmica no país, fundamentado em uma cosmovisão bíblica.',
    img: 'imgCSmall.png',
    alt: 'Trabalha para fornecer uma pedagogia cristã',
  },
  {
    title: (
      <Fragment>
        Histórico do <strong className="text-red-m">SME</strong>
      </Fragment>
    ),
    description:
      'Os Sistemas de Ensino Mackenzie traduzem os princípios essenciais de um ensino-aprendizagem de excelência em materiais didáticos e soluções pedagógicas para professores e alunos. Nosso Modelo Pedagógico se baseia em uma visão integrada dos conhecimentos, em um processo de ensinoaprendizagem interativo e significativo, e em uma metodologia reflexiva que promove a compreensão do ensino, realizado com personalização sem deixar de promover uma aprendizagem colaborativa à luz da cosmovisão cristã. Se você compartilha essa abordagem educacional, junte-se a nós nesta jornada!',
    img: 'imgDSmall.png',
    alt: 'Modelo pedagógico alinhado com a filosofia cristã',
    hasButton: true,
  },
]
