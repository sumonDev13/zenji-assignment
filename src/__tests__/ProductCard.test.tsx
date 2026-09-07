import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

const mockProduct: Product = {
  id: "1",
  name: "Test Tee",
  slug: "test-tee",
  price: 89.0,
  images: {
    front: "https://example.com/front.jpg",
    back: "https://example.com/back.jpg",
  },
  collection: "THE_ORIGIN_DROP",
  description: "A test product",
  sizes: ["S", "M", "L"],
  colors: ["Black"],
};

const mockSaleProduct: Product = {
  ...mockProduct,
  id: "2",
  name: "Sale Tee",
  slug: "sale-tee",
  salePrice: 59.0,
  isSale: true,
  salePercentage: 33,
};

describe("ProductCard", () => {
  it("renders product name", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Test Tee")).toBeInTheDocument();
  });

  it("renders regular price", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("A$89.00")).toBeInTheDocument();
  });

  it("renders sale badge when product is on sale", () => {
    render(<ProductCard product={mockSaleProduct} />);
    expect(screen.getByText("SALE 33% OFF")).toBeInTheDocument();
  });

  it("renders sale price and original price when on sale", () => {
    render(<ProductCard product={mockSaleProduct} />);
    expect(screen.getByText("A$59.00")).toBeInTheDocument();
    expect(screen.getByText("A$89.00")).toBeInTheDocument();
  });

  it("renders quick view overlay by default", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("QUICK VIEW →")).toBeInTheDocument();
  });

  it("hides quick view overlay when showQuickView is false", () => {
    render(<ProductCard product={mockProduct} showQuickView={false} />);
    expect(screen.queryByText("QUICK VIEW →")).not.toBeInTheDocument();
  });

  it("renders collection label when showCollection is true", () => {
    render(<ProductCard product={mockProduct} showCollection />);
    expect(screen.getByText(/THE_ORIGIN_DROP/)).toBeInTheDocument();
  });

  it("hides collection label by default", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.queryByText(/COLLECTION/)).not.toBeInTheDocument();
  });

  it("links to product detail page", () => {
    render(<ProductCard product={mockProduct} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/drop/test-tee");
  });
});
