import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Твоя заявка принята 🎉`);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse-glow"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-float mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              11 ЛЕТ!
            </h1>
            <div className="flex justify-center items-center gap-4 mb-6">
              <Icon name="Cake" size={40} className="text-primary animate-float" />
              <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
                День рождения Никиты
              </h2>
              <Icon name="GameController" size={40} className="text-secondary animate-float" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Приглашаем на самый крутой праздник года! 🎮🎂
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in">
              <CardContent className="p-6 text-center">
                <Icon name="Calendar" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Когда?</h3>
                <p className="text-muted-foreground">
                  28 июля 2025<br />
                  В 15:00
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 animate-fade-in">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Где?</h3>
                <p className="text-muted-foreground">
                  VR Club<br />
                  г. Москва
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Программа праздника
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Icon name="Gamepad2" size={40} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-primary">VR Club</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Погружение в виртуальную реальность! Игры, приключения и незабываемые эмоции.
                </p>
                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                  <Icon name="Clock" size={20} />
                  <span>15:00 - 17:00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-secondary/20 hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center animate-pulse-glow">
                  <Icon name="UtensilsCrossed" size={40} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-secondary">Вкусный обед</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Праздничное меню, торт и сладости. Готовьтесь к кулинарному празднику!
                </p>
                <div className="flex items-center justify-center gap-2 text-secondary font-semibold">
                  <Icon name="Clock" size={20} />
                  <span>17:00 - 18:30</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Регистрация на праздник
              </CardTitle>
              <p className="text-muted-foreground">
                Заполни форму, чтобы подтвердить участие в самом крутом дне рождения!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-medium">
                    Твоё имя
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введи своё имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12 text-lg border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-medium">
                    Телефон родителей
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12 text-lg border-secondary/20 focus:border-secondary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg font-medium">
                    Пожелания имениннику
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Напиши пожелание Никите..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[100px] text-lg border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-200 animate-pulse-glow"
                >
                  <Icon name="PartyPopper" size={24} className="mr-2" />
                  Подтвердить участие!
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-8 text-center">
        <p className="text-lg text-muted-foreground mb-4">
          До встречи на празднике! 🎉
        </p>
        <div className="flex justify-center items-center gap-4">
          <Icon name="Gift" size={24} className="text-primary animate-float" />
          <span className="text-xl font-semibold">С днём рождения, Никита!</span>
          <Icon name="Star" size={24} className="text-secondary animate-float" />
        </div>
      </footer>
    </div>
  );
}