let db = require('../models/dbconection');

let producto = {
    listar(req, res) {
        let sql = 'SELECT * FROM PRODUCTO';
        db.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(result);
            }
        });
    },
    store(req, res) {
        val_nombre = req.body.descripcion;
        val_precio = req.body.precio;
        let sql = 'INSERT INTO PRODUCTO(descripcion,precio) VALUES(?,?)';
        db.query(sql, [val_nombre, val_precio], function (err, newData) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(newData);
            }
        });
    },
    show(req, res) {
        val_id = req.params.id;
        let sql = 'SELECT *  FROM PRODUCTO WHERE codigo = ?';
        db.query(sql, [val_id], function (err, rowData) {
            if (err) {
                console.log(err)
                res.sendStatus(500);
            } else {
                res.json(rowData);
            }
        });
    },
    edit(req, res) {
        val_id = req.body.codigo
        val_nombre = req.body.descripcion;
        val_precio = req.body.precio;
        let sql = 'UPDATE PRODUCTO SET descripcion = ?, precio = ? WHERE codigo = ?'
        db.query(sql, [val_nombre, val_precio, val_id], function (err, updateData) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(updateData);
            }
        });
    },
    delete(req, res) {
        val_id = req.params.id;
        let sql = 'DELETE FROM PRODUCTO WHERE codigo = ?';
        db.query(sql, [val_id], function (err, newData) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    }
};

module.exports = producto;