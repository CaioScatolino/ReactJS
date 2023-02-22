import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        tipo=""
        author="Caio"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, reiciendis? Odio a voluptas nulla laudantium, quis facere quidem aliquid similique, molestias ea et magni ex quae amet. Quis, temporibus corporis!"
      />
      <Post
        tipo=""
        author="Denis"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, reiciendis? Odio a voluptas nulla laudantium, quis facere quidem aliquid similique, molestias ea et magni ex quae amet. Quis, temporibus corporis!"
      />
    </div>
  );
}
