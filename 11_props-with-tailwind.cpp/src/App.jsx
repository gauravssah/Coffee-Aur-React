import Cars from "./components/Cars"

function App() {

  const employee1 = {
    name: 'Alex Johnson',
    jobTitle: 'Senior Software Engineer',
    img: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  const employee2 = {
    name: 'Emily Chen',
    jobTitle: 'IT Project Manager',
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
  };

  const employee3 = {
    name: 'Ryan Patel',
    jobTitle: 'Network Administrator',
    img: 'https://images.pexels.com/photos/3867837/pexels-photo-3867837.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  const employee4 = {
    name: 'Jessica Miller',
    jobTitle: 'Data Scientist',
    img: 'https://images.pexels.com/photos/3874032/pexels-photo-3874032.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  const employee5 = {
    name: 'Kevin Davis',
    jobTitle: 'Cybersecurity Analyst',
    img: 'https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center  bg-black p-3 ">
        Empowering Businesses through Digital Excellence
      </h1>

      <p className="text-center font-thin mt-2">TechGenius Solutions</p>
      <div className="container flex gap-5 m-auto mt-5">
        <Cars employee={employee1} />
        <Cars employee={employee2} />
        <Cars employee={employee3} />
        <Cars employee={employee4} />
        <Cars employee={employee5} />
      </div>




    </>
  )
}

export default App
