import { Category } from 'src/core/domain/models/category.entity';
import { CategoryRepository } from 'src/core/domain/repositories/category';
import { AddCategoryDTO } from 'src/presentation/dtos/category/addCategory.dto';
import { Injectable } from '@nestjs/common';
import { ICategoryService } from '../interface/categoryService';

@Injectable()
export class CategorySeedService implements ICategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async seedCategories() {
    let resultCategories: Category[] = [];
    const categories: AddCategoryDTO[] = [
      { name: 'Dining', image_link: 'https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaItwoMh~QISLs29VKiW~SxSvbgHeDpZ8QORoLDzczXw5kXWG7hL724h4VwF3RiAQoEDxYSQJpdnbWuOO8MJQRmbKRB-wv3IIs0Pb4ggYrQqf66UNQysEpR8afYobeKDLHZvoKZdZPxfys2ubaXHOF47Q9TPDrIgFykrA73AYRd-bktiDqW0WbsDVVjrn~~yTgj06jC-Dk3qTYVfpKazmRjpTDd5hEm7Ush4q0-ZQ~IoKWhnknuFqY2XH1RI~UV4PJIhAjhvEkLbSMGXUnRZq374HejRPwHNcIZ7Y4RyeA9sQMipCiGjJKxSVIul-1yQjCl-Ro8YWnQFMQRkKDK0kg__', description: 'Descrição da categoria 1' },
      { name: 'Living', image_link: 'https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOyzYWNCkEKC8njUtwWKD78lyWmUqSsUP0Htey4ikF4bH71E~YyjC0DxsC9YusF~2suWoj5YV4-kOiin69CVZOhtklMyRJXSX0Hj~DQNiLBEgwhPVL4kdVf1nKfcqu8YOj~d3D614SXAPmPGn12W7eO-owETD5NeY1-z6n7dORkvg~eX-tU3hXiBHUeFIhjcERMmoP4CWnUwbAwCt72~Mh6hoJ860ziIjabmdXEKaMwjp~9Ttavfk9J7v1~vMQ9vW0U2CL91HjMl4~f~8II6K01pMxX4I8hFTfNxo1rfoDD6qL~YaIIK7QIIgOVoC~koK4z~hD14Ngcu1Ry~ReLzFQ__', description: 'Descrição da categoria 2' },
      { name: 'Bedroom', image_link: 'https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsIVhupAsBvCm-WnW8cIs5UfcsSBb7sQzmMHIEZnNN1INntsdVMcFC4RKeyANQXE-5HgJpQN~hDZ456BEO5bPCfkISnVfqSXpgFlT280A5BeIk0nKQC2XIuOVUYyab7L8U7O2WGxWSzS~BNaDHpHe8u6rwkw~4sLJpZAtu~5wQoPrOQjgLYPQgdVMC9aDHrUj5Nf2eg5iq0Q0hEQoVTiUIAZyf3VXDvDqUAYIT~FuWQBh3lhkzSdrenxfP2j7ABNdizFM45rSSfPd8UAkloE0h6v-FLtViOwN7x3BaT61ygaIvyFz8Ixk8ytWCRS~lCg92ZXqOvKtj7N21M89PbqeQ__', description: 'Descrição da categoria 3' },
    ];
    for(const category of categories){
      let data = await this.categoryRepository.create(category)
      resultCategories.push(data)
    }

    return resultCategories
  }
}
