import { faker } from '@faker-js/faker';
import { AddAttributesDTO } from '@/presentation/dtos/attributes/addAttributes.dto';

  export function generateAttributes() {
    const images = [
        'https://i.postimg.cc/RV4bt66d/abajur.png',
        'https://i.postimg.cc/sDmH4j5r/cadeira.png',
        'https://i.postimg.cc/XNcsnjHC/jantar.png',
        'https://i.postimg.cc/Qtc09hjv/mesa.png',
        'https://i.postimg.cc/MTJY8N15/quarto.png',
        'https://i.postimg.cc/Xq3x9mJq/sala.png',
        'https://i.postimg.cc/Z5gcwCR1/sofa.png',
        'https://i.postimg.cc/kGcsss6c/sofa-grande.png',
        'https://i.postimg.cc/DyvBZ9HY/sofa-grande2.png',
        'https://i.postimg.cc/3Jt9DLHr/sofa-pequeno.png',
        'https://i.postimg.cc/y8WjhFVm/sofa-sala.png',
        'https://i.postimg.cc/KYM5wx34/sofas.png',
    ];

    const attributes = [];
    for (let i = 0; i < 3; i++) {
      const imageIndex = faker.number.int({ min: 0, max: images.length - 1 });
      const attribute: Omit<AddAttributesDTO,'product_id'> = {
        qtd: faker.number.int({ min: 1, max: 10 }),
        color: faker.color.human(),
        size: faker.helpers.arrayElement(['s', 'm', 'l']),
        image_link: images[imageIndex],
      };
      attributes.push(attribute);
    }
    return attributes;
  }
