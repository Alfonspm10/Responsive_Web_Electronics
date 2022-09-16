import styles from "../style";
import { discount, robot } from "../assets";
import EmpiezaAhora_button from "./EmpiezaAhora_button";


const Principal = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Descuento Para{" "}
            <span className="text-white">1 Mes</span> de Servicio.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[48px] text-white ss:leading-[100.8px] leading-[75px]">
            Autentica <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Revolución de</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <EmpiezaAhora_button />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Metodo De Pago.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Bienvenido a mi pagina
        </p>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <EmpiezaAhora_button />
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient empieza */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient acaba */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <EmpiezaAhora_button />
      </div>  

  </section>
  );
};

export default Principal;