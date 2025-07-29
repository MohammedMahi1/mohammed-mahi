import { AtSign } from "lucide-react";
import Label from "../components/ui/label";
import { Link } from "react-router";

const ReachMe = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Label>📬 Reach Me</Label>
      <Label>
        Have a project in mind or just want to connect?
        <br />
        Feel free to reach out — I’d love to hear from you!
      </Label>
      <Label>👉 Click the button below to copy my email:</Label>
      <Link to="mailto:mohammed.mahi012@gmail.com?body=My custom mail body">

        
            <AtSign/>
        
        <span>mohammed.mahi012@gmail.com</span>
      </Link>
      
    </div>
  );
};

export default ReachMe;
