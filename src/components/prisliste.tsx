import utgivelserData from '../constants/utgivelser.json'

const Prisliste = () => {
  const booksBrygge = utgivelserData.utgivelser.bryggepraten
  const booksOther = utgivelserData.utgivelser.andre_forfattere
  console.log(booksOther)
  
  return (
    <section className='p-2 my-2 border border-slate-100 bg-white rounded-sm drop-shadow-lg grid'>
      <h3 className='text-xl'>Prisliste</h3>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Bøker av Bryggepraten</h4>
        {booksBrygge ? booksBrygge.map(book => {return (
          <div className='w-full flex justify-between hover:bg-slate-50'>
            <div>{book.tittel}</div>
            <div>{book.pris ? `${book.pris},-` : '(ta kontakt me forfatter)'}</div>
          </div>
        )}) : null}
        
      </div>
      <hr />
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>Andre forfattere</h4>
        {booksOther ? booksOther.map(book => {return (<div className='w-full grid grid-cols-2 md:grid-cols-3 hover:bg-slate-50' >
            <div>{book.tittel}</div>
            <div className='hidden md:block' >av {book.forfattere}</div>
            <div className='justify-self-end'>{book.pris ? `${book.pris},-` : '(ta kontakt me forfatter)'}</div>
          </div>)} ): <div>Ingen bøkær funnet</div>}
      </div>
      
      
      
        


      <a href='#' className='p-2 m-2 border text-center rounded-sm w-full md:w-36 justify-self-center md:justify-self-end shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 bg-[#efb261] text-black text-secondary hover:text-amber-100 hover:bg-yellow-900'>Bestill her</a>
    </section>
  )
}

export default Prisliste