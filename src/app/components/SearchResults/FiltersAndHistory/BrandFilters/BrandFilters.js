import config from "../../../../resources/config/config";
export default function BrandFilters() {
  console.log(config.brands);
  return (
    <div>
      Hello
      <div>
        {config.brands.map((brand) => {
          return (
            <div>
              <input type="checkbox" onClick={(event) => {}}></input>
              {brand}
            </div>
          );
        })}
      </div>
    </div>
  );
}
