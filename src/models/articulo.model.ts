import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Articulo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idArticulo?: number;

  @property({
    type: 'number',
    required: true,
  })
  idCategoria: number;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  precio_venta: string;

  @property({
    type: 'number',
    required: true,
  })
  stok: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
