require('babel-core/register');
const AsyncProps = require('async-props').default;
const loadPropsOnServer = require('async-props').loadPropsOnServer;
const React = require('react');
const ReactDom = require('react-dom/server');
const Router = require('react-router');
const routesConfig = require('../client/routesConfig');
const routerContext = require('../client/routerContext');

exports.install = function() 
{
 F.route('*',function() {
     let self = this;
     let req= self.req;
     let res= self.response;

   Router.match(
    {routes: routesConfig, location: req.url},
    function(error, redirectLocation, renderProps)  {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {

        loadPropsOnServer(renderProps,{},function(error,asyncProps,scriptTag){

            const _html = ReactDom.renderToString(routerContext(renderProps,asyncProps));
            // OR alternative way
            // const _html = ReactDom.renderToString(<AsyncProps {...renderProps} {...asyncProps} />);

             console.log('markup',_html);
             self.view('index', {markup:_html});

        });
        

      
      } else {
        res.status(404).send('Not found..')
      }
    });

});

};

