const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const dust = require('dustjs-helpers');
const pg = require('pg');
const app = express();