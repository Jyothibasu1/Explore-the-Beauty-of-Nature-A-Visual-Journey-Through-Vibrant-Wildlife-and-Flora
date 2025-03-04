 import'./gallery.css'
function Gallery(p){
    return(
        <>
        <div className="card">
            <img src={p.img} height={300} width={300}></img>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
        </div>
        </>
    )
}
function Cards(){
    return(
        <>
        <div className="cardscomp">
        <Gallery img={"https://cdn.pixabay.com/photo/2021/12/10/15/15/coleus-6860722_1280.jpg"} title="flowers"
        description= "A beautiful image showcasing vibrant and colorful flowers, capturing nature's brilliance. These flowers are known for their stunning variety in shape and color, making them perfect for any garden or floral display. Experience the beauty of the natural world through this image."/>
        <Gallery img={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'} title="birds"
        description="This captivating image features birds in their natural habitat, showcasing their grace and freedom. Birds play a vital role in the ecosystem, and their vibrant feathers and songs add color to our environment. This image captures their elegance perfectly."/>
        <Gallery img={"https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"} title="birds"
        description="A glimpse into the life of zoo animals, featuring an array of creatures from around the world. Zoos serve as both a sanctuary for endangered species and a place of education for visitors. This image highlights the diversity and beauty of wildlife."/>
        <Gallery img={'https://cdn.pixabay.com/photo/2023/03/19/16/15/butterfly-7862893_1280.jpg'} title="butterfly"
        description="A delicate butterfly rests on a leaf, showcasing the beauty and fragility of nature. Butterflies symbolize transformation and renewal, as they undergo a metamorphosis that is a marvel of the natural world. This image captures their grace and elegance."/>
        <Gallery img={"https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg"} title="birds"
         description="An image of birds soaring through the sky, demonstrating their freedom and natural instinct to migrate. Birds are a symbol of freedom and peace, and this image emphasizes their grace and power as they navigate through the air."/>
        < Gallery img={"https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_1280.jpg"} title="birds"
         description="A close-up image of a bird in motion, showcasing its vivid colors and remarkable features. Birds are fascinating creatures known for their intelligence and beauty. This image captures their majestic flight in full glory."/>
        </div>
        </>
    )
}
export default Cards