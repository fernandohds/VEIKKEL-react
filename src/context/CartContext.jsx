import React, {useState,useEffect, createContext,} from 'react';

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(0);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		setTotal(handleTotal());
		setPrice(handleTotalPrice());
	}, [cartItems]);


	const addItem = (item, count) => {
		
		let cartElement = {item, count};
		
		let cartAux = [];
	
		if (isInCart(item)) {
			
			cartElement = cartItems.find(element => element.item.id === item.id);
			cartElement.count += count;
			cartAux = [...cartItems];
		} else {
		
			cartAux = [cartElement, ...cartItems];
		}

		setCartItems(cartAux);
	};
	
	const removeItem = item => {
		if (isInCart(item)) {
			
			const cartElements = cartItems.filter(element => element.item.id !== item.id) || [];
			
			setCartItems([...cartElements]);
		}
	};

	const clear = () => setCartItems([]);

	
	const isInCart = item => cartItems && cartItems.some(element => element.item.id === item.id);

	const removeOneItem = item => {
		if (isInCart(item)) {
			
			const cartElement = cartItems.find(element => element.item.id === item.id);
			if (cartElement.count === 1) {
				
				removeItem(item);
			} else {
				
				const cart = cartItems;
				cart.map(element => {
					
					if (element.item.id === item.id) {
						element.count -= 1;
					}

					return element;
				});
				
				setCartItems([...cart]);
			}
		}
	};
	const handleTotalPriceByItem = () => {
		
		const newCartItems = cartItems;
		
		return newCartItems.map(element =>
		
			({
				...element,
				price: element.item.price * element.count,
			}),
		);
	};


	const handleTotal = () => {
		
		const initialValue = 0;
		return (
			cartItems
      && cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.count, initialValue)
		);
	};

	
	const handleTotalPrice = () => {
		
		const cartAux = handleTotalPriceByItem();
		
		const initialValue = 0;
		return (
			cartAux
    
      && cartAux.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue)
		);
	};


	return (
		<CartContext.Provider
			value={{
				addItem,
				removeItem,
				removeOneItem,
				clear,
				isInCart,
				cartItems,
				total,
				price,
				
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
