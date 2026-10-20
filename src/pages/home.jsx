export default function Barang() {
  const daftar = ["Charger laptop", "Sepatu", "Pulpen"];
 
  return (
    <div>
      <h1>Daftar Barang</h1>
      <ul className="list-barang">
        {daftar.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
 