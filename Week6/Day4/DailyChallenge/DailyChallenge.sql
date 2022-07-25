CREATE TABLE product_orders(
order_id SERIAL PRIMARY KEY NOT NULL,
shipped BOOLEAN NOT NULL
);

CREATE TABLE items(
item_id SERIAL PRIMARY KEY NOT NULL,
item_name VARCHAR(20) NOT NULL,
item_price SMALLINT NOT NULL,
order_item_id INTEGER REFERENCES product_orders (order_id)
);

INSERT INTO product_orders(shipped)
VALUES(true),(false)

INSERT INTO items(item_name, item_price, order_item_id)
VALUES('gloves', 25, 2)

SELECT SUM(item_price) FROM items WHERE order_item_id = 1

CREATE OR REPLACE FUNCTION add_and_return (numToAdd integer, shipped boolean) 
RETURNS integer AS 
$$
DECLARE
    new_num integer;
BEGIN
   UPDATE items SET item_price = SUM(item_price)
   WHERE shipped = true
   RETURNING item_price INTO new_num;
   RETURN new_num;
END;
$$
LANGUAGE 'plpgsql';

SELECT * FROM items

