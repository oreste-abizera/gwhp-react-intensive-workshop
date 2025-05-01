export default function Greeting({ name, role }) {
  return (
    <div className="greeting">
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  );
}
