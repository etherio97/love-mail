// config/routes.php
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Route;

$routes = new RouteCollection();
// ...

$routes->add('admin', new Route('/wp-admin', array(
    '_controller' => 'Symfony\Bundle\FrameworkBundle\Controller\RedirectController::redirectAction',
    'route'       => 'sonata_admin_dashboard',
    // make a permanent redirection...
    'permanent'   => true,
    // ...and keep the original query string parameters
    'keepQueryParams' => true,
)));

return $routes;
