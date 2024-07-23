export interface Pedido {
  type: string | null;
  imageChurroURL: string;
  typeChurro: string;
  totalChurros: number;
  totalPrice: number;
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
  deliveryDay: string;
  deliveryTime: string;
}

export interface Purchase {
  typeChurro: string | null;
  imageChurroURL: string;
  totalChurros: number;
  totalPrice: number;
}

export interface DataClient {
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
}
