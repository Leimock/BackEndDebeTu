import { Connection } from "../models/connection"


const connectToCreditor = async (userIdCreditor, userIdDebtor) => {
    const newConnection = new Connection()

    newConnection.creditor = userIdCreditor
    newConnection.debtor = userIdDebtor
    newConnection.debts = []

    return await newConnection.save()
}

const disconnectToCreditor = async (idConnection) => await Connection.findByIdAndUpdate(idConnection, {active: false})

const getConnectionfromUsersIds = async (userIdCreditor, userIdDebtor) => await Connection.findOne({creditor: userIdCreditor, debtor: userIdDebtor})

export {connectToCreditor, disconnectToCreditor, getConnectionfromUsersIds}