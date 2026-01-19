import { BackHome } from '../BackHome';
import { useState } from 'react';
import './Ecommerce.css';
import { games } from './productsData.js';

export function Ecommerce(){

	const [search,setSearch]=useState("");
	const [genre,setGenre]=useState("All");
	const [platform,setPlatform]=useState("All");
	const [sort,setSort]=useState("default");

	const filteredGame=games.filter(game=>{
		const matchSearch=game.title.toLowerCase().includes(search.toLowerCase());
		const matchGenre=genre==="All" || game.genre===genre;
		const matchPlatform=platform==="All" || game.platform===platform;

		return matchSearch && matchGenre && matchPlatform;
	}).sort((a,b)=>{
		if(sort==="priceLow") return a.price - b.price;
		if(sort==="priceHigh") return b.price - a.price;
		if(sort==="ratingHigh") return b.rating - a.rating;
		return 0;
	})

	return(
		<div className='ecommerce-page'>
			<title>Game Store</title>
			<BackHome />
			<h1 className='ecom-title'>🎮 Game Store</h1>

			<div className='filters'>
				<input 
					type="text"
					placeholder='Search game...'
					value={search}
					onChange={(e)=>setSearch(e.target.value)}	
				/>

				<select value={genre} onChange={(e)=>setGenre(e.target.value)} >
					<option value="All">All Genres</option>
					<option value="Action">Action</option>
					<option value="RPG">RPG</option>
					<option value="Shooter">Shooter</option>
					<option value="Adventure">Adventure</option>
					<option value="Sports">Sports</option>
				</select>

				<select value={platform} onChange={(e)=>setPlatform(e.target.value)}>
					<option value="All">All Platforms</option>
					<option value="PC">PC</option>
					<option value="PlayStation">PlayStation</option>
					<option value="Mobile">Mobile</option>
				</select>

				<select value={sort} onChange={(e)=>setSort(e.target.value)}>
					<option value="default">Sort By</option>
					<option value="priceLow">Price: Low to High</option>
					<option value="priceHigh">Price: High to low</option>
					<option value="ratingHigh">Rating: High to Low</option>
				</select>

			</div>

			<div className='products-grid'>
				{filteredGame.map(game => (
					<div className='product-card' key={game.id}>
						<img src={game.image} alt={game.title} />
						<h3>{game.title}</h3>
						<p>{game.genre} • {game.platform}</p>
						<span>₹{game.price === 0 ? "Free" : game.price}</span>
						<div className='rating'>⭐ {game.rating}</div>
					</div>
				))}
			</div>
		</div>
	);
}
