import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

export function Field({ label, name, placeholder, required, type = "text" }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border-border bg-card"
      />
    </div>
  );
}

export function TextareaField({ label, name, placeholder, required }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="rounded-xl border-border bg-card"
      />
    </div>
  );
}
