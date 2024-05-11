import axios from "axios";
import { useEffect, useState } from "react";

interface AppType {
  id: number;
  name: string;
}
const App = () => {
  const [value, setValue] = useState<string>("");
  const [product, setPoduct] = useState<AppType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const { data } = await axios.get<any>(
        "https://api-v2.elchocrud.pro/api/v1/3cc4808c6d8cf9f2310d65cddc6c76b1/product_v1"
      );
      setPoduct(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  const postData = async () => {
    try {
      const { data } = await axios.post<any>(
        "https://api-v2.elchocrud.pro/api/v1/3cc4808c6d8cf9f2310d65cddc6c76b1/product_v1",
        {
          name: value,
        }
      );
      setPoduct(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <button onClick={postData}>Add</button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="">
        {loading ? (
          <h1>LoadIng....</h1>
        ) : (
          <div className="">
            {product.map((el) => (
              <div className="">
                <h1>{el.name}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
