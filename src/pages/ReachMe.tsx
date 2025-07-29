import { Copy } from "lucide-react";
import Button from "../components/ui/button";
import Label from "../components/ui/label";

const ReachMe = () => {
      const handleCopy = (event:any) => {
        event.trarget.innerText
    console.log('Text copied:', event.target.innerText)
  };
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <Label>📬 Reach Me</Label>
      <Label>
        Have a project in mind or just want to connect?
        <br />
        Feel free to reach out — I’d love to hear from you!
      </Label>
      <Label>👉 Click the button below to copy my email:</Label>
      <Button onClick={handleCopy}>
        <Copy/>
        <span>mohammed.mahi012@gmail.com</span>
      </Button>
    </div>
  );
};

export default ReachMe;
