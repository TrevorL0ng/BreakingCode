<div className='card'>
    <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt="card front"/>
            <img 
            className='back' 
            src={Cover} 
            onClick={handleClick} 
            alt="back cover"
        />
    </div>
</div>