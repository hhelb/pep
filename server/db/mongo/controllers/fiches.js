/**
 * Created by hasj on 21/11/2016.
 */
import Fiche from '../models/fiches';

/**
 * List
 */
export function all(req, res) {
    Fiche.find({}).exec((err, fiches) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }

        return res.json(fiches);
    });
}

export function add (req, res){
    let fiche = new Fiche({
        id : req.body.id,
        name: req.body.name,
        text: req.body.text
    });
    return fiche.save((err) =>{
        if(err){
            console.log(err);
            return res.status(400).send("nope")
        }
        return res.status(200).send('fiche created');
    })
}

export function remove (req, res){
    const query = { id : req.params.id};
    Fiche.findOneAndRemove( query, (err) =>{
        if(err) {
            console.log("error " + err);
            return res.status(500).send('We failed to delete for some reason');
        }
        return res.status(200).send("fiche removed successfully");
    })

}
export function update(req, res) {
    const query = {id : req.params.id};
    Fiche.findOneAndUpdate( query, req.body, (err) => {
        if(err){
            return res.status(500).send('Failed to update the data of '+ query.id);
        }
        return res.status(200).send('Fiche update');
    })
}

export function one(req, res){
    const query = {id : req.params.id};
    Fiche.findOne(query, (err, fiche)=> {
        if(err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }
        return res.json(fiche);
    })
}

export default{
    all,
    one,
    add,
    remove,
    update
}
