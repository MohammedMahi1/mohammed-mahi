import { Check, Copy } from "lucide-react";
import Button from "../components/ui/button";
import Label from "../components/ui/label";
import { useState } from "react";

const ReachMe = () => {
    const [isCopied,setIsCopied] = useState(false)
  const handleCopy = (event: any) => {
    navigator.clipboard.writeText(event.target.innerText);
    setIsCopied(true);
    setTimeout(()=>{
        setIsCopied(false)
    },1000)
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Label>📬 Reach Me</Label>
      <Label>
        Have a project in mind or just want to connect?
        <br />
        Feel free to reach out — I’d love to hear from you!
      </Label>
      <Label>👉 Click the button below to copy my email:</Label>
      <Button
        onClick={(e: any) => {
          handleCopy(e);
        }}
      >
        {
            isCopied ?
            
            <Check/>
            :
            <Copy />
        }
        <span>mohammed.mahi012@gmail.com</span>
      </Button>
    </div>
  );
};

export default ReachMe;
