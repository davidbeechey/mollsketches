import Image from "next/image";
import Card from "../../components/Card";
import commissionImg from "../../public/images/commissions.png";
import CommissionsForm from "./CommissionsForm";

const Commissions = () => (
    <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
        <h1>Commissions</h1>
        <div className="grid md:grid-cols-2 gap-4">
            <Image src={commissionImg} alt="Commissions options" className="rounded-3xl" priority />
            <Card>
                <CommissionsForm />
            </Card>
        </div>
    </div>
);

export default Commissions;