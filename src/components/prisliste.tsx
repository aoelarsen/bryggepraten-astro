import utgivelserData from '../constants/utgivelser.json'

const Prisliste = () => {
  console.log(utgivelserData.utgivelser)
  const books = utgivelserData.utgivelser.bokutgivelser
  const calendars = utgivelserData.utgivelser.kalendere
  const others = utgivelserData.utgivelser.andre_utgivelser
  return (
    <section className='p-2 my-2 border border-slate-100 bg-white rounded-sm drop-shadow-lg grid'>
      <h3 className='text-xl'>Prisliste</h3>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Bøker</h4>
        {books.map(book => {return (
          <div className="w-full flex justify-between hover:bg-slate-50">
            <div>{book.tittel}</div>
            <div>{book.pris ? book.pris : '? '},-</div>
          </div>
        )})}
        
      </div>
      <hr />
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Kalendere</h4>
        {calendars.map(calendar => {return (
          <div className="w-full flex justify-between hover:bg-slate-50">
            <div>{calendar.tittel}</div>
            <div>{calendar.pris},-</div>
          </div>
        )})}
        
      </div>


      <a href="#" className='p-2 m-2 border text-center rounded-sm w-full md:w-36 justify-self-end shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 bg-[#efb261] text-black text-secondary hover:text-amber-100 hover:bg-yellow-900'>Bestill her</a>
    </section>
  )
}

export default Prisliste