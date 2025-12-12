import { Card } from "@/components/ui/card";

interface MenuCardProps {
  icon: string;
  title: string;
  description: string;
  highlight: string;
  price: string;
  priceColor?: "orange" | "yellow";
}

const MenuCard = ({ icon, title, description, highlight, price, priceColor = "orange" }: MenuCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary transition-smooth p-8 group hover:shadow-glow-orange">
      <div className="mb-6">
        <img 
          src={icon} 
          alt={title}
          className="w-24 h-24 mx-auto rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/50 transition-smooth"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="bg-muted/50 rounded-lg p-4 border border-border">
        <p className="text-foreground font-semibold mb-2">Destaque:</p>
        <p className="text-foreground/90 mb-3">{highlight}</p>
        <p className={`text-2xl font-bold ${priceColor === "yellow" ? "text-secondary" : "text-primary"}`}>
          {price}
        </p>
      </div>
    </Card>
  );
};

export default MenuCard;
