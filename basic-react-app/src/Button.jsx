function handleClick(event){
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver(){
    console.log("Bye!");
}

function handleDbClick(){
    console.log("Double Clicked!");
}

export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur velit ut culpa iure autem magni officiis veniam reprehenderit rem soluta in optio sequi molestiae, cum tempore saepe eaque. Nisi?
            Officia et assumenda, consequatur recusandae expedita pariatur placeat velit, nesciunt modi ut explicabo rem accusamus culpa deleniti nulla fugiat maxime hic asperiores nam at itaque. Modi placeat minus ipsam deserunt.
            Odit accusantium soluta eum, nam laborum magnam ex cumque quia sint! Maxime obcaecati eius quod necessitatibus voluptatibus laudantium praesentium cumque quibusdam ducimus, quia reiciendis recusandae blanditiis labore, quasi dignissimos iusto.
            Dolorum, non necessitatibus quis molestias eveniet exercitationem fugiat omnis! Odio, odit officia voluptatibus atque eaque, quisquam impedit est enim iusto ipsa dolorum eveniet nobis hic necessitatibus corporis natus ducimus iure.
            Dicta similique facere rem omnis ducimus dolore delectus distinctio inventore eligendi autem, quia rerum eius! Rerum iure culpa, voluptatem ut veritatis quam iste nesciunt sunt, velit, nam aut commodi et.
            Rerum laborum quam et architecto quis labore rem pariatur illum, non nostrum expedita doloremque facilis quaerat sunt porro. Ex magni reiciendis totam recusandae alias nemo, doloribus voluptas veniam repudiandae repellat?
            Delectus incidunt dolor earum. Nam illum, unde doloremque ad voluptates maiores. Qui nisi esse cum beatae similique mollitia. Et dicta rerum cumque facere saepe ea, enim illo aperiam hic facilis?
            Nam iste consequuntur assumenda accusantium voluptatum impedit voluptatibus rerum magni esse? Ea reprehenderit aut eos eveniet vel in dicta reiciendis molestiae similique beatae, impedit repellendus temporibus nobis sequi ipsa! Eaque?
            Quaerat, rerum assumenda! Esse architecto, fuga recusandae temporibus odit placeat. Inventore, dolor! Expedita dolore eligendi dolores id modi animi harum laudantium similique voluptatibus accusamus voluptates qui, ut dolor asperiores ad.
            </p>
        <button onDoubleClick={handleDbClick}>OOPS!</button>
        </div>
    );
}