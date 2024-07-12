export interface Pedido {
  type: string | null;
  imageChurroURL: string;
  totalChurros: number;
  totalPrice: number;
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
  deliveryDay: string;
  deliveryTime: string;
}

export interface Purchase {
  type: string | null;
  imageChurroURL: string;
  totalChurros: number;
  totalPrice: number;
}

export interface DataClient {
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
}
