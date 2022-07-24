import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';

@Injectable()
export class AxiosService implements HttpAdapter {
  private axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
    });
  }

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }
}
