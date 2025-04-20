export interface Pedido {
  type: string | null;
  imageChurroURL: string;
  typeChurro: string;
  totalChurros: number;
  typeAccordingtoQuantity: string;
  totalPrice: number;
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
  delivery: string
  deliveryTime: string;
}

export interface Purchase {
  typeChurro: string | null;
  imageChurroURL: string;
  totalChurros: number;
  typeAccordingtoQuantity: string;
  totalPrice: number;
}

export interface DataClient {
  clientName: string;
  clientAddress: string;
  aditionalInfoAddress: string;
}
