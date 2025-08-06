import { Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  available?: boolean;
  unavailableReason?: string;
  onAdd: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite?: boolean;
  quantity?: number;
  onQuantityChange?: (id: string, quantity: number) => void;
}

const FoodCard = ({ 
  id, 
  name, 
  price, 
  image, 
  description,
  available = true, 
  unavailableReason,
  onAdd,
  onToggleFavorite,
  isFavorite = false,
  quantity = 0,
  onQuantityChange
}: FoodCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border/50 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3 p-3">
        {/* Food Image */}
        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 md:w-16 md:h-16">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Food Details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground text-sm md:text-base mb-0.5 truncate">{name}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{description}</p>
          )}
          {!available && unavailableReason && (
            <p className="text-xs text-muted-foreground mb-1">{unavailableReason}</p>
          )}
          <p className="text-base font-bold text-card-foreground md:text-lg">₹{price}</p>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggleFavorite(id)}
            className="text-muted-foreground hover:text-destructive w-8 h-8 md:w-10 md:h-10 hover:bg-transparent"
          >
            <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
          </Button>
          
          {quantity > 0 && onQuantityChange ? (
            <div
              style={{
                width: 92,
                height: 36,
                borderRadius: 8,
                padding: '4px 10px',
                background: '#38963B',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                opacity: 1,
              }}
            >
              <button style={{ color: '#fff', fontSize: 18, width: 22, height: 22, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => onQuantityChange(id, quantity - 1)}>
                <Minus size={18} color="#fff" />
              </button>
              <span style={{ width: 24, textAlign: 'center', color: '#fff', fontWeight: 500 }}>{quantity}</span>
              <button style={{ color: '#fff', fontSize: 18, width: 22, height: 22, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => onQuantityChange(id, quantity + 1)}>
                <Plus size={18} color="#fff" />
              </button>
            </div>
          ) : (
            <Button
              variant={available ? "default" : "secondary"}
              size="sm"
              onClick={() => available && onAdd(id)}
              disabled={!available}
              className="min-w-[50px] md:min-w-[60px] bg-success hover:bg-success/90 text-success-foreground border border-success/20 text-xs md:text-sm h-8 md:h-9"
            >
              Add
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FoodCard;