import img1 from "./../img/Amatriciana Pizza.jpg";
import img2 from "./../img/Margherita Pizza.jpg";
import img3 from "./../img/Meat Lover.jpg";
import img4 from "./../img/Vegetable pizza.jpg";
import img5 from "./../img/Shrimp Pizza.jpg";
import img6 from "./../img/Pepperoni Pizza.jpg";

import GridCard from "./gridCard";
const BodyContent = () => {
    return ( 
        <>
            <div className="container-fluid bg-light">
               <div className="container">
                <h1 className="text-dark">Our Pizza</h1>
                    <div className="row g-5">
                        <GridCard img={img1} title="Amatriciana Pizza" description="A tantalizing Amatriciana Pizza, adorned with succulent pancetta, tangy tomato sauce, and a sprinkle of pecorino romano, delivers a burst of Italian flavors in every bite, transporting your taste buds to the streets of Rome. Its harmonious blend of smoky, savory, and spicy notes makes it a culinary masterpiece that leaves a lasting impression."></GridCard>
                        <GridCard img={img2} title="Margherita Pizza" description="Savor the timeless simplicity of the Margherita Pizza, where the vibrant trio of ripe tomatoes, fragrant basil leaves, and creamy mozzarella dance harmoniously atop a crisp, golden crust, capturing the essence of Italian culinary tradition. With each bite, you're transported to the sun-kissed hills of Naples, where this classic dish first graced the tables of eager diners centuries ago."></GridCard>
                        <GridCard img={img3} title="Meat Lover" description="Indulge in the ultimate carnivorous delight with the Meat Lover pizza, generously topped with a mouthwatering assortment of pepperoni, sausage, bacon, and ham, creating a symphony of savory flavors. Each slice promises a hearty, protein-packed experience that satisfies even the most voracious appetites."></GridCard>
                        <GridCard img={img4} title="Vegetable pizza" description="Delight in the garden-fresh goodness of the Vegetable Pizza, featuring a colorful medley of crisp bell peppers, juicy tomatoes, earthy mushrooms, and tender spinach atop a delectably chewy crust. With every bite, you'll revel in the vibrant flavors and wholesome satisfaction of this nutritious masterpiece."></GridCard>
                        <GridCard img={img5} title="Shrimp Pizza" description="Treat your palate to the luxurious flavors of the Shrimp Pizza, where succulent shrimp, kissed with garlic butter, mingle with tangy marinara sauce and creamy mozzarella on a perfectly baked crust. With each bite, you'll embark on a culinary journey to coastal shores, indulging in the irresistible combination of seafood freshness and Italian craftsmanship."></GridCard>
                        <GridCard img={img6} title="Pepperoni Pizza" description="Satisfy your cravings with the iconic Pepperoni Pizza, boasting a generous layer of zesty tomato sauce, gooey mozzarella cheese, and a symphony of savory pepperoni slices atop a crispy yet doughy crust. With its irresistible aroma and classic flavor profile, every bite is a nostalgic homage to the timeless appeal of this beloved pizza variety."></GridCard>
                    </div>
               </div>
            </div>
        
        </>
     );
}
 
export default BodyContent;