import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from "./components/FeedBackForm";
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Route, Routes, NavLink, Navigate, useNavigate, Link, useParams } from "react-router-dom";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import PostNav from "./components/PostNav";
import PropTypes from 'prop-types';
import { FaQuestion } from 'react-icons/fa'

export { useState, FeedbackList, Header, FeedbackData, FeedBackStats, FeedBackForm, uuidv4, BrowserRouter, Route, Routes, NavLink, About, AboutIconLink, Card, Post, PostNav, useNavigate, Navigate, PropTypes, Link, useParams, FaQuestion }