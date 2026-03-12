export abstract class Product {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate: number = 1.25;
  public discountRate: number = 0;

  constructor(title: string, imageUrl: string, basePrice: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.basePrice = basePrice;
  }

  public getPrice(): number {
    return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
  }

  public getPriceWithoutTax(): number {
    return this.basePrice * (1 - this.discountRate);
  }

  public getDiscountRate(): number {
    return this.discountRate;
  }

  public setDiscountRate(discountRate: number): void {
    this.discountRate = discountRate;
  }
}