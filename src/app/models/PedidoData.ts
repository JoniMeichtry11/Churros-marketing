export interface Pedido {
  type: string | null;
  totalChurros: number;
  totalPrice: number;
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
}

export interface Purchase {
  type: string | null;
  totalChurros: number;
  totalPrice: number;
}

export interface DataClient {
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
}
