const express = require("express");
const BookProductModel = require("../Models/BookProductModel");
const FashionProductModel = require("../Models/FashionProductModel");
const asynchandler = require("express-async-handler");

const BookProductRouteController = asynchandler(async (req, res) => {
  try {
    const Products = await BookProductModel.find();
    res.status(200);
    res.send(Products);
  } catch (error) {
    res.status(404);
    res.json({ error: error.message });
  }
});

const FashionProductRouteController = asynchandler(async (req, res) => {
  try {
    const Products = await FashionProductModel.find();
    res.status(200);
    res.send(Products);
  } catch (error) {
    res.status(404);
    res.json({ error: error.message });
  }
});

const GetFashionProductController = asynchandler(async (req, res) => {
  try {
    const Product = await FashionProductModel.findById(req.params.id);
    res.status(200);
    res.send(Product);
  } catch (error) {
    res.status(404);
    res.json({ error: error.message });
  }
});

module.exports = { BookProductRouteController, FashionProductRouteController , GetFashionProductController};
