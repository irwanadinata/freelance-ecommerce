import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AfterSucces = () => {
  const navigate = useNavigate();

  return (
    <div className="h-96 flex flex-col justify-center items-center">
      <h1 className="text-xl text-center my-4">Pesananmu Telah Dibayar</h1>
      <Button
        className="w-56 bg-[#F8009C] hover:bg-[#F8009C]/80"
        onClick={() => navigate("/dashboard")}
      >
        Kembali ke dashboard
      </Button>
    </div>
  );
};

export default AfterSucces;
