# the import section
import webapp2
import jinja2
import os

# the handler section
class MainPage(webapp2.RequestHandler):
  def get(self):
	self.response.headers['Content-Type'] = 'text/html'
	self.response.write('<h1>Hello, CSSI!</h1>')

class EnterInfoHandler(webapp2.RequestHandler):
    def get(self):  # for a get request
        welcome_template = the_jinja_env.get_template('templates/welcome.html')
        a_variable_dict = {
            "greeting": "Howdy",
            "adjective": "amazing"
        }
        self.response.write(welcome_template.render(a_variable_dict))


class ShowMemeHandler(webapp2.RequestHandler):
    def get(self):
        results_template = the_jinja_env.get_template('templates/results.html')
        first_input = self.request.get('user-first-ln')
        second_input = self.request.get('user-second-ln')
        the_variable_dict = {
             'line1': first_input,
             'line2': second_input,
             "img_url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Deep_in_thought.jpg"
        }
        self.response.write(results_template.render(the_variable_dict))

# class MyPostHandler(webapp2.RequestHandler):
#   def post(self):
#     first_input = self.request.get('user-first-ln')
#     template_vars = { 'line1': first_input }
#     template = jinja_env.get_template('templates/result.html')
#     self.response.write(template.render(template_vars))
#


# the app configuration section
app = webapp2.WSGIApplication([
  ('/', MainPage),
  ('/welcome', EnterInfoHandler),
  ('/result', ShowMemeHandler)
  ], debug=True)

# this initializes the jinja2 environment
# this will be the same in every app that uses the jinja2 templating library
the_jinja_env = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)
