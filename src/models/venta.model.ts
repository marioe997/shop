import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Venta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idVenta?: number;

  @property({
    type: 'number',
    required: true,
  })
  idCliente: number;

  @property({
    type: 'number',
    required: true,
  })
  idUsuario: number;

  @property({
    type: 'string',
    required: true,
  })
  tipo_comprobante: string;

  @property({
    type: 'string',
    required: true,
  })
  serie_comprobante: string;

  @property({
    type: 'string',
    required: true,
  })
  numero_comprobante: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  impuesto: string;

  @property({
    type: 'string',
    required: true,
  })
  total: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;
