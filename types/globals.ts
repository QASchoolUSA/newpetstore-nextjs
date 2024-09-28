export interface Product {
    id: string;
    attributes: {
        title: string;
        description: string;
        price: number,
        image: {
            data: Array<{
                attributes: {
                    formats: {
                        small: {
                            url: string;
                        }
                    }
                }
            }>
        }
    }
}


export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    imageUrl: string;
  }