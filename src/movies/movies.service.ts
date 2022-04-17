import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {

  constructor(@InjectRepository(Movie)
      private movieRepository: Repository<Movie>,
    ) {}
  
  async create(data: CreateMovieDto) {
    const movie = this.movieRepository.create(data);
    await this.movieRepository.save(data);
    return movie;
  }

  async findAll() {
    return await this.movieRepository.find();
  }

  async findOne(id: number) {
    return await this.movieRepository.findOne({ where: {
      id: id
    }});
  }

  async update(id: number, data: UpdateMovieDto) {
    await this.movieRepository.update({ id }, data);

    return await this.movieRepository.findOne({ where: {
      id: id
    }});
  }

  async remove(id: number) {
    await this.movieRepository.delete({ id });

    return { deleted: true };
  }
}
